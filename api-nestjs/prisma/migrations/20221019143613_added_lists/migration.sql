BEGIN TRY

BEGIN TRAN;

-- CreateTable
CREATE TABLE [dbo].[List] (
    [list_id] INT NOT NULL IDENTITY(1,1),
    [list_type] INT NOT NULL CONSTRAINT [List_list_type_df] DEFAULT 0,
    [title] NVARCHAR(1000) NOT NULL,
    [search_params] NVARCHAR(1000) NOT NULL,
    [is_notifiable_by_email] BIT NOT NULL CONSTRAINT [List_is_notifiable_by_email_df] DEFAULT 0,
    [is_notifiable_by_push] BIT NOT NULL CONSTRAINT [List_is_notifiable_by_push_df] DEFAULT 0,
    [is_notifiable_by_sms] BIT NOT NULL CONSTRAINT [List_is_notifiable_by_sms_df] DEFAULT 0,
    [user_sub] NVARCHAR(1000) NOT NULL,
    CONSTRAINT [List_pkey] PRIMARY KEY CLUSTERED ([list_id])
);

-- CreateTable
CREATE TABLE [dbo].[ListAd] (
    [ad_id] INT NOT NULL,
    [list_id] INT NOT NULL,
    CONSTRAINT [ListAd_pkey] PRIMARY KEY CLUSTERED ([ad_id],[list_id])
);

-- AddForeignKey
ALTER TABLE [dbo].[List] ADD CONSTRAINT [List_user_sub_fkey] FOREIGN KEY ([user_sub]) REFERENCES [dbo].[User]([user_sub]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[ListAd] ADD CONSTRAINT [ListAd_ad_id_fkey] FOREIGN KEY ([ad_id]) REFERENCES [dbo].[Ad]([ad_id]) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[ListAd] ADD CONSTRAINT [ListAd_list_id_fkey] FOREIGN KEY ([list_id]) REFERENCES [dbo].[List]([list_id]) ON DELETE CASCADE ON UPDATE CASCADE;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
