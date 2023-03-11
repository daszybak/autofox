BEGIN TRY

BEGIN TRAN;

-- CreateTable
CREATE TABLE [dbo].[Messaging] (
    [messaging_id] INT NOT NULL IDENTITY(1,1),
    [created_at] DATETIME2 NOT NULL CONSTRAINT [Messaging_created_at_df] DEFAULT CURRENT_TIMESTAMP,
    [updated_at] DATETIME2 NOT NULL,
    [deleted_at] DATETIME2,
    [address] NVARCHAR(1000) NOT NULL,
    [device_type] INT NOT NULL,
    [platform] NVARCHAR(1000) NOT NULL,
    [user_sub] NVARCHAR(1000) NOT NULL,
    CONSTRAINT [Messaging_pkey] PRIMARY KEY CLUSTERED ([messaging_id])
);

-- AddForeignKey
ALTER TABLE [dbo].[Messaging] ADD CONSTRAINT [Messaging_user_sub_fkey] FOREIGN KEY ([user_sub]) REFERENCES [dbo].[User]([user_sub]) ON DELETE NO ACTION ON UPDATE NO ACTION;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
