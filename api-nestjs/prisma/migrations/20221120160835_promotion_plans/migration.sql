BEGIN TRY

BEGIN TRAN;

-- CreateTable
CREATE TABLE [dbo].[PromotionPlan] (
    [promotion_plan_id] INT NOT NULL IDENTITY(1,1),
    [created_at] DATETIME2 NOT NULL CONSTRAINT [PromotionPlan_created_at_df] DEFAULT CURRENT_TIMESTAMP,
    [updated_at] DATETIME2 NOT NULL,
    [deleted_at] DATETIME2,
    [title] NVARCHAR(1000) NOT NULL,
    [text] NVARCHAR(1000) NOT NULL,
    [price] DECIMAL(32,16) NOT NULL,
    [validity_period] INT NOT NULL,
    [promotion_region_cid] INT,
    [promotion_plan_type] INT NOT NULL CONSTRAINT [PromotionPlan_promotion_plan_type_df] DEFAULT 0,
    CONSTRAINT [PromotionPlan_pkey] PRIMARY KEY CLUSTERED ([promotion_plan_id])
);

-- CreateTable
CREATE TABLE [dbo].[PromotionPlanRelation] (
    [parent_promotion_plan_id] INT NOT NULL,
    [child_promotion_plan_id] INT NOT NULL,
    [count] INT NOT NULL CONSTRAINT [PromotionPlanRelation_count_df] DEFAULT 1,
    [reccurence] INT NOT NULL CONSTRAINT [PromotionPlanRelation_reccurence_df] DEFAULT 2,
    CONSTRAINT [PromotionPlanRelation_pkey] PRIMARY KEY CLUSTERED ([parent_promotion_plan_id],[child_promotion_plan_id])
);

-- CreateTable
CREATE TABLE [dbo].[AdPromotion] (
    [promotion_plan_id] INT NOT NULL,
    [ad_id] INT NOT NULL,
    [user_sub] NVARCHAR(1000) NOT NULL,
    [valid_from] DATETIME2,
    [valid_to] DATETIME2,
    [transaction_id] NVARCHAR(1000),
    CONSTRAINT [AdPromotion_pkey] PRIMARY KEY CLUSTERED ([promotion_plan_id],[ad_id],[user_sub])
);

-- CreateTable
CREATE TABLE [dbo].[UserPromotion] (
    [promotion_plan_id] INT NOT NULL,
    [user_sub] NVARCHAR(1000) NOT NULL,
    [valid_from] DATETIME2,
    [valid_to] DATETIME2,
    [transaction_id] NVARCHAR(1000),
    CONSTRAINT [UserPromotion_pkey] PRIMARY KEY CLUSTERED ([promotion_plan_id],[user_sub])
);

-- AddForeignKey
ALTER TABLE [dbo].[PromotionPlan] ADD CONSTRAINT [PromotionPlan_promotion_region_cid_fkey] FOREIGN KEY ([promotion_region_cid]) REFERENCES [dbo].[Category]([category_id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[PromotionPlanRelation] ADD CONSTRAINT [PromotionPlanRelation_parent_promotion_plan_id_fkey] FOREIGN KEY ([parent_promotion_plan_id]) REFERENCES [dbo].[PromotionPlan]([promotion_plan_id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[PromotionPlanRelation] ADD CONSTRAINT [PromotionPlanRelation_child_promotion_plan_id_fkey] FOREIGN KEY ([child_promotion_plan_id]) REFERENCES [dbo].[PromotionPlan]([promotion_plan_id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[AdPromotion] ADD CONSTRAINT [AdPromotion_promotion_plan_id_fkey] FOREIGN KEY ([promotion_plan_id]) REFERENCES [dbo].[PromotionPlan]([promotion_plan_id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[AdPromotion] ADD CONSTRAINT [AdPromotion_ad_id_fkey] FOREIGN KEY ([ad_id]) REFERENCES [dbo].[Ad]([ad_id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[AdPromotion] ADD CONSTRAINT [AdPromotion_user_sub_fkey] FOREIGN KEY ([user_sub]) REFERENCES [dbo].[User]([user_sub]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[UserPromotion] ADD CONSTRAINT [UserPromotion_promotion_plan_id_fkey] FOREIGN KEY ([promotion_plan_id]) REFERENCES [dbo].[PromotionPlan]([promotion_plan_id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[UserPromotion] ADD CONSTRAINT [UserPromotion_user_sub_fkey] FOREIGN KEY ([user_sub]) REFERENCES [dbo].[User]([user_sub]) ON DELETE NO ACTION ON UPDATE NO ACTION;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
