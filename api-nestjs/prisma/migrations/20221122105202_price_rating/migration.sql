/*
  Warnings:

  - You are about to drop the column `price_estimate` on the `Ad` table. All the data in the column will be lost.

*/
BEGIN TRY

BEGIN TRAN;

-- AlterTable
ALTER TABLE [dbo].[Ad] DROP COLUMN [price_estimate];
ALTER TABLE [dbo].[Ad] ADD [price_rating] DECIMAL(2,1);

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
