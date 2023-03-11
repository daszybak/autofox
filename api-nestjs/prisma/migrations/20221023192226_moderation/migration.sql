BEGIN TRY

BEGIN TRAN;

-- AlterTable
ALTER TABLE [dbo].[Ad] ADD [is_sold] BIT NOT NULL CONSTRAINT [Ad_is_sold_df] DEFAULT 0,
[moderation_flag] INT NOT NULL CONSTRAINT [Ad_moderation_flag_df] DEFAULT 0;

-- AlterTable
ALTER TABLE [dbo].[User] ADD [moderation_flag] INT NOT NULL CONSTRAINT [User_moderation_flag_df] DEFAULT 0;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
