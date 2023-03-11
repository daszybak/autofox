import { MantineTheme } from '@mantine/core';
import { CardVariant } from '../../types/card-variant';
export interface MyCardStylesParams {
    variant: CardVariant;
}
export declare const useStyles: (params: MyCardStylesParams, options?: import("@mantine/core").UseStylesOptions<"root" | "cardContainer" | "imageContainer" | "imagePlaceholder" | "contentContainer" | "orientation"> | undefined) => {
    classes: Record<"root" | "cardContainer" | "imageContainer" | "imagePlaceholder" | "contentContainer" | "orientation", string>;
    cx: (...args: any) => string;
    theme: MantineTheme;
};
