BEGIN TRY

BEGIN TRAN;

-- AlterTable
ALTER TABLE [dbo].[AdAuto] ADD [body_type_cid] INT,
[variant_cid] INT;

-- AddForeignKey
ALTER TABLE [dbo].[AdAuto] ADD CONSTRAINT [AdAuto_body_type_cid_fkey] FOREIGN KEY ([body_type_cid]) REFERENCES [dbo].[Category]([category_id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[AdAuto] ADD CONSTRAINT [AdAuto_variant_cid_fkey] FOREIGN KEY ([variant_cid]) REFERENCES [dbo].[Category]([category_id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
