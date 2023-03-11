BEGIN TRY

BEGIN TRAN;

-- CreateTable
CREATE TABLE [dbo].[Blog] (
    [blog_id] INT NOT NULL IDENTITY(1,1),
    [created_at] DATETIME2 NOT NULL CONSTRAINT [Blog_created_at_df] DEFAULT CURRENT_TIMESTAMP,
    [updated_at] DATETIME2 NOT NULL,
    [deleted_at] DATETIME2,
    [title] NVARCHAR(1000) NOT NULL,
    [slug] NVARCHAR(1000) NOT NULL,
    [text] NVARCHAR(1000) NOT NULL,
    [language_cid] INT,
    [user_sub] NVARCHAR(1000) NOT NULL,
    [moderation_flag] INT NOT NULL CONSTRAINT [Blog_moderation_flag_df] DEFAULT 0,
    CONSTRAINT [Blog_pkey] PRIMARY KEY CLUSTERED ([blog_id])
);

-- AddForeignKey
ALTER TABLE [dbo].[Blog] ADD CONSTRAINT [Blog_language_cid_fkey] FOREIGN KEY ([language_cid]) REFERENCES [dbo].[Category]([category_id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[Blog] ADD CONSTRAINT [Blog_user_sub_fkey] FOREIGN KEY ([user_sub]) REFERENCES [dbo].[User]([user_sub]) ON DELETE NO ACTION ON UPDATE NO ACTION;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
