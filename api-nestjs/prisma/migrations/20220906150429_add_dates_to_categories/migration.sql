/*
  Warnings:

  - Added the required column `updated_at` to the `Category` table without a default value. This is not possible if the table is not empty.

*/
BEGIN TRY

BEGIN TRAN;

-- AlterTable
ALTER TABLE [dbo].[Category] ADD [created_at] DATETIME2 NOT NULL CONSTRAINT [Category_created_at_df] DEFAULT CURRENT_TIMESTAMP,
[deleted_at] DATETIME2,
[updated_at] DATETIME2 NOT NULL;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
