/*
  Warnings:

  - You are about to drop the `Messaging` table. If the table is not empty, all the data it contains will be lost.

*/
BEGIN TRY

BEGIN TRAN;

-- DropForeignKey
ALTER TABLE [dbo].[Messaging] DROP CONSTRAINT [Messaging_user_sub_fkey];

-- DropTable
DROP TABLE [dbo].[Messaging];

-- CreateTable
CREATE TABLE [dbo].[MessagingChannel] (
    [messaging_channel_id] INT NOT NULL IDENTITY(1,1),
    [created_at] DATETIME2 NOT NULL CONSTRAINT [MessagingChannel_created_at_df] DEFAULT CURRENT_TIMESTAMP,
    [updated_at] DATETIME2 NOT NULL,
    [deleted_at] DATETIME2,
    [address] NVARCHAR(1000) NOT NULL,
    [device_type] INT NOT NULL,
    [platform] NVARCHAR(1000) NOT NULL,
    [user_sub] NVARCHAR(1000) NOT NULL,
    CONSTRAINT [MessagingChannel_pkey] PRIMARY KEY CLUSTERED ([messaging_channel_id])
);

-- AddForeignKey
ALTER TABLE [dbo].[MessagingChannel] ADD CONSTRAINT [MessagingChannel_user_sub_fkey] FOREIGN KEY ([user_sub]) REFERENCES [dbo].[User]([user_sub]) ON DELETE NO ACTION ON UPDATE NO ACTION;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
