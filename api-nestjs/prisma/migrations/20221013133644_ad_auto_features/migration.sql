BEGIN TRY

BEGIN TRAN;

-- AlterTable
ALTER TABLE [dbo].[AdAuto] ADD [battery_capacity_kwh] INT,
[color_exterior_cid] INT,
[color_interior_cid] INT,
[conditioning_cid] INT,
[doors_num] INT,
[emission_class_cid] INT,
[engine_displacement_cm3] INT,
[is_first_owner] BIT,
[is_service_book_available] BIT,
[is_vehicle_garaged] BIT,
[registered_until] DATETIME2,
[seats_num] INT;

-- AddForeignKey
ALTER TABLE [dbo].[AdAuto] ADD CONSTRAINT [AdAuto_emission_class_cid_fkey] FOREIGN KEY ([emission_class_cid]) REFERENCES [dbo].[Category]([category_id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[AdAuto] ADD CONSTRAINT [AdAuto_conditioning_cid_fkey] FOREIGN KEY ([conditioning_cid]) REFERENCES [dbo].[Category]([category_id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[AdAuto] ADD CONSTRAINT [AdAuto_color_exterior_cid_fkey] FOREIGN KEY ([color_exterior_cid]) REFERENCES [dbo].[Category]([category_id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[AdAuto] ADD CONSTRAINT [AdAuto_color_interior_cid_fkey] FOREIGN KEY ([color_interior_cid]) REFERENCES [dbo].[Category]([category_id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
