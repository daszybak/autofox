BEGIN TRY

BEGIN TRAN;

-- CreateTable
CREATE TABLE [dbo].[User] (
    [user_sub] NVARCHAR(1000) NOT NULL,
    [name] NVARCHAR(1000),
    CONSTRAINT [User_pkey] PRIMARY KEY CLUSTERED ([user_sub]),
    CONSTRAINT [User_user_sub_key] UNIQUE NONCLUSTERED ([user_sub])
);

-- CreateTable
CREATE TABLE [dbo].[Category] (
    [category_id] INT NOT NULL IDENTITY(1,1),
    [name] NVARCHAR(1000) NOT NULL,
    [parent_category_id] INT,
    [icon] NVARCHAR(1000),
    [code] NVARCHAR(1000) NOT NULL,
    [weight] INT,
    CONSTRAINT [Category_pkey] PRIMARY KEY CLUSTERED ([category_id])
);

-- CreateTable
CREATE TABLE [dbo].[Ad] (
    [ad_id] INT NOT NULL IDENTITY(1,1),
    [created_at] DATETIME2 NOT NULL CONSTRAINT [Ad_created_at_df] DEFAULT CURRENT_TIMESTAMP,
    [updated_at] DATETIME2 NOT NULL,
    [deleted_at] DATETIME2,
    [title] NVARCHAR(1000) NOT NULL,
    [text] NVARCHAR(1000) NOT NULL,
    [coords_latitude] FLOAT(53),
    [coords_longitude] FLOAT(53),
    [coords_radius] INT,
    [address] NVARCHAR(1000),
    [price_eurocent] INT,
    [user_sub] NVARCHAR(1000) NOT NULL,
    CONSTRAINT [Ad_pkey] PRIMARY KEY CLUSTERED ([ad_id])
);

-- CreateTable
CREATE TABLE [dbo].[AdCategory] (
    [ad_id] INT NOT NULL,
    [category_id] INT NOT NULL,
    CONSTRAINT [AdCategory_pkey] PRIMARY KEY CLUSTERED ([ad_id],[category_id])
);

-- CreateTable
CREATE TABLE [dbo].[AdAuto] (
    [ad_auto_id] INT NOT NULL IDENTITY(1,1),
    [ad_id] INT NOT NULL,
    [condition_type_cid] INT,
    [vehicle_type_cid] INT,
    [fuel_type_cid] INT,
    [transmission_type_cid] INT,
    [make] NVARCHAR(1000) NOT NULL,
    [model] NVARCHAR(1000) NOT NULL,
    [year] INT NOT NULL,
    [km] INT,
    [power_kw] INT,
    CONSTRAINT [AdAuto_pkey] PRIMARY KEY CLUSTERED ([ad_auto_id]),
    CONSTRAINT [AdAuto_ad_id_key] UNIQUE NONCLUSTERED ([ad_id])
);

-- CreateTable
CREATE TABLE [dbo].[AdHouse] (
    [ad_house_id] INT NOT NULL IDENTITY(1,1),
    [ad_id] INT NOT NULL,
    [meters] INT,
    CONSTRAINT [AdHouse_pkey] PRIMARY KEY CLUSTERED ([ad_house_id]),
    CONSTRAINT [AdHouse_ad_id_key] UNIQUE NONCLUSTERED ([ad_id])
);

-- CreateTable
CREATE TABLE [dbo].[File] (
    [file_id] INT NOT NULL IDENTITY(1,1),
    [filename] NVARCHAR(1000) NOT NULL,
    [filesize] INT NOT NULL,
    [code] NVARCHAR(1000) NOT NULL,
    [path] NVARCHAR(1000) NOT NULL,
    [ad_id] INT NOT NULL,
    [user_sub] NVARCHAR(1000) NOT NULL,
    CONSTRAINT [File_pkey] PRIMARY KEY CLUSTERED ([file_id])
);

-- AddForeignKey
ALTER TABLE [dbo].[Category] ADD CONSTRAINT [Category_parent_category_id_fkey] FOREIGN KEY ([parent_category_id]) REFERENCES [dbo].[Category]([category_id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[Ad] ADD CONSTRAINT [Ad_user_sub_fkey] FOREIGN KEY ([user_sub]) REFERENCES [dbo].[User]([user_sub]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[AdCategory] ADD CONSTRAINT [AdCategory_ad_id_fkey] FOREIGN KEY ([ad_id]) REFERENCES [dbo].[Ad]([ad_id]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[AdCategory] ADD CONSTRAINT [AdCategory_category_id_fkey] FOREIGN KEY ([category_id]) REFERENCES [dbo].[Category]([category_id]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[AdAuto] ADD CONSTRAINT [AdAuto_ad_id_fkey] FOREIGN KEY ([ad_id]) REFERENCES [dbo].[Ad]([ad_id]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[AdAuto] ADD CONSTRAINT [AdAuto_condition_type_cid_fkey] FOREIGN KEY ([condition_type_cid]) REFERENCES [dbo].[Category]([category_id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[AdAuto] ADD CONSTRAINT [AdAuto_vehicle_type_cid_fkey] FOREIGN KEY ([vehicle_type_cid]) REFERENCES [dbo].[Category]([category_id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[AdAuto] ADD CONSTRAINT [AdAuto_fuel_type_cid_fkey] FOREIGN KEY ([fuel_type_cid]) REFERENCES [dbo].[Category]([category_id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[AdAuto] ADD CONSTRAINT [AdAuto_transmission_type_cid_fkey] FOREIGN KEY ([transmission_type_cid]) REFERENCES [dbo].[Category]([category_id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[AdHouse] ADD CONSTRAINT [AdHouse_ad_id_fkey] FOREIGN KEY ([ad_id]) REFERENCES [dbo].[Ad]([ad_id]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[File] ADD CONSTRAINT [File_ad_id_fkey] FOREIGN KEY ([ad_id]) REFERENCES [dbo].[Ad]([ad_id]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[File] ADD CONSTRAINT [File_user_sub_fkey] FOREIGN KEY ([user_sub]) REFERENCES [dbo].[User]([user_sub]) ON DELETE NO ACTION ON UPDATE NO ACTION;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
