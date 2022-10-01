import type * as Stitches from '@stitches/react';
export type { VariantProps } from '@stitches/react';
interface StitchesMedia {
  [x: string]: any;
  initial?: any;
  as?: any;
  css?: Stitches.CSS;
}

// We exclude these type properties from the `ComponentVariants` type so that storybook can more
// easily understand the type arguments. We exclude `"true"` and `"false"` strings as well since
// stitches also adds these, and they aren't necessary for storybook controls.
export type StitchesPropsToExclude = 'true' | 'false' | StitchesMedia;

export function modifyVariantsForStory<ComponentVariants, ComponentProps>(
  component: (props: ComponentProps) => JSX.Element
) {
  type ComponentStoryVariants = {
    [Property in keyof ComponentVariants]: Exclude<
      ComponentVariants[Property],
      StitchesPropsToExclude
    >;
  };

  type ComponentStoryProps = Omit<ComponentProps, keyof ComponentVariants> &
    ComponentStoryVariants;

  return component as unknown as (props: ComponentStoryProps) => JSX.Element;
}
