/*
  Warnings:

  - You are about to drop the column `make` on the `AdAuto` table. All the data in the column will be lost.
  - You are about to drop the column `model` on the `AdAuto` table. All the data in the column will be lost.

*/
BEGIN TRY

BEGIN TRAN;

-- AlterTable
ALTER TABLE [dbo].[AdAuto] DROP COLUMN [make],
[model];
ALTER TABLE [dbo].[AdAuto] ADD [make_cid] INT,
[model_cid] INT;

-- AddForeignKey
ALTER TABLE [dbo].[AdAuto] ADD CONSTRAINT [AdAuto_make_cid_fkey] FOREIGN KEY ([make_cid]) REFERENCES [dbo].[Category]([category_id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[AdAuto] ADD CONSTRAINT [AdAuto_model_cid_fkey] FOREIGN KEY ([model_cid]) REFERENCES [dbo].[Category]([category_id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
