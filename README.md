# Getting Start

Before getting start to develop in this repository, you need to set a variable in your `.bashrc` file (The `.bashrc` is located in the home directory of your linux distribution).
So open the `.bashrc` file and add the following line at the end.

```bash
GITHUB_ACCESS_TOKEN="your access token"
```

If you do not know how to create an access token in GitHub, you can see [this document](https://docs.github.com/en/enterprise-server@3.9/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens).

## Package Installation

Now you need to install all the dependencies of the project using the following command:

```bash
npm i
```

## Run The Project

There is some examples defined in the `/example` directory of the repository. To view these example on the browser, you can run the project using the following command:

```bash
npm run dev
```

## Elements

We have some reusable elements, defined in the `/elements` directory. We will review each one and you can see how to use them.

### Button & Links
The button element is a wrapper to the button component of `@wordpress/components` library. The styles in the new component is customized and also the type of some properties is changed to `enum` to decrease the possible mistakes in using `string`.

#### Properties
As we mentioned you can use all the defined properties for the `button` component of the `@wordpress/components` library and you can check them [here](https://developer.wordpress.org/block-editor/reference-guides/components/button/). So I just mention those ones which their type is changed:

1. **variant:**
The type of this property is `ButtonVariant` and these are the possible choices for this property: `PRIMARY`, `SECONDARY`, `TERITARY`, and `LINK`.

```tsx
<Button variant={ButtonVariant.PRIMARY} />
```

2. **color:**
The type of this property is `ButtonColor` and these are the possible choices for this property: `GREEN`, and `RED`.

```tsx
<Button color={ButtonColor.GREEN} />
```

3. **size:**
The type of this property is `ButtonSize` and these are the possible choices for this property: `LARGE`, `MEDIUM`, `SMALL`, `X_SMALL`, and `XX_SMALL`.

```tsx
<Button size={ButtonSize.MEDIUM} />
```

4. **icon position:**
The type of this property is `ButtonIconPosition` and these are the possible choices for this property: `START`, and `END`.

```tsx
<Button iconPosition={ButtonIconPosition.END} />
```

### Input Fields
This package supports different types of input fields collected in 7 components.

#### Input
Most common input field is `Input`. You can use `Input` when the type of your inputs are "text", "number", "date", "date time local", "color", "email", "month", "password", and "hidden".
The `Input` component is a wrapper to [__experimentalInputControl](https://developer.wordpress.org/block-editor/reference-guides/components/input-control/) of `@wordpress/components` package. So in addition to properties of the main component, just a property is added, and another one has type change.

1. **type**
The type of `type` property is changed to `InputType` which is an `enum` with the following choices: `TEXT`, `DATE`, `DATE_TIME_LOCAL`, `COLOR`, `EMAIL`, `HIDDEN`, `MONTH`, `NUMBER`, and `PASSWORD`.

The default value for input `type`, is `TEXT`:
```tsx
<Input help="this is help" label="this is a simple input" placeholder="this is placeholder" />
```

With specified type and icons for the start and end of input:
```tsx
<Input
  help="this is help"
  label="this is label"
  placeholder="this is placeholder"
  type={InputType.NUMBER}
  suffix={<Icon iconName={IconName.CHECK_MARK_CIRCLE_FILLED} />}
  prefix={<Icon iconName={IconName.CHECK_MARK_CIRCLE_FILLED} />}
/>
```

2. **hasError**
The `hasError` property is a `boolean` that you can pass `true` to it when the input field is faced with an error.

#### Checkbox
The `Checkbox` input is a wrapper component for [CheckboxControl](https://developer.wordpress.org/block-editor/reference-guides/components/checkbox-control/) component of `@wordpress/components`, and all of properties of the main component is the same for our customized component.

Usage:
```tsx
<Checkbox
  onChange={(value: boolean) => {
    // handle the on change function
  }}
  label="Checkbox Label"
  checked={/*true or false*/}
/>
```

#### Radio
The `Radio` input is also a wrapper component for [RadioControl](https://developer.wordpress.org/block-editor/reference-guides/components/radio-control/) which is a component of `@wordpress/components`. So all of the properties of `Radio` is the same as `RadioControl`.

For using the `Radio` component, you need to pass the `options` property and it will add a radio button for each option:
```tsx
<Radio
  onChange={(value: string) => {
    // handle the on change function
  }}
  label="Radio Label"
  options={[
    { label: 'Radio option 1 label', value: '1' },
    { label: 'Radio option 2 label', value: '2' }
  ]}
  selected={radioState}
/>
```

#### Range
The `Range` input field is a wrapper for [RangeControl](https://developer.wordpress.org/block-editor/reference-guides/components/range-control/) of `@wordpress/components`. The only property that is added to this component is `helpPosition` which is responsible to determine the position of help text. This is an optional property with two choices: `INSIDE` (default value), and `BOTTOM`.


```tsx
<Range
  label="Adjust Gap"
  value={/* range value */}
  max={100}
  helpPosition={RangeHelpPosition.BOTTOM} // or RangeHelpPosition.INSIDE
  onChange={(value?: number) => {
    setRangeState(value ?? 0);
  }}
  help="px data"
/>
```

#### Toggle
The `Toggle` input field is a wrapper for [ToggleControl](https://developer.wordpress.org/block-editor/reference-guides/components/toggle-control/) of `@wordpress/components`. There is no new property for this component.

```tsx
<Toggle
  label="Toggle Label"
  help="Toggle Hint"
  onChange={(value: boolean) => {
    // handle change
  }}
  checked={/* boolean value */}
/>
```

#### Select
The `Select` input field is also a wrapper for [SelectControl](https://developer.wordpress.org/block-editor/reference-guides/components/select-control/) of `@wordpress/components`. There is only a `hasError` property added to this component, which is getting a boolean value and add a error style to this component.
This is how to use this component:

```tsx
<Select
  label="Select one"
  help="This is the help text"
  options={[
    {
      value: 'value1',
      label: 'First Label'
    },
    {
      value: 'value2',
      label: 'Second Label'
    }
  ]}
/>
```

#### Multi Select
The `MultiSelect` input field is a wrapper for [FormTokenField](https://developer.wordpress.org/block-editor/reference-guides/components/form-token-field/) of `@wordpress/components`. Some new optional properties is added to the `MultiSelect` component such as: `hasError`, `showHelp`, and `renderItem`. Also some properties of the main component (FormTokenField) are forced with a static value. Below you can see these properties with their static values:

- `__experimentalAutoSelectFirstMatch` --> true
- `__experimentalExpandOnFocus` --> true
- `__experimentalShowHowTo` --> The `showHelp` property is passed to this property
- `__experimentalRenderItem` --> If you need a customized render view for the selected items, you can use the `renderItem` which is calling in the body of `__experimentalRenderItem` property.

### Icon
The `Icon` component has 4 properties.

1. **iconName** `required`

  Type: `IconName`

  You can find the possible choices for this enum in the `/src/elements/icon/icon-type.ts` path.

2. **size** `optional`

  Type: `IconSize`

  The options you can use for this enum are: `TINY`, `SMALL`, `MEDIUM`, `LARGE`, and `X_LARGE`. The default value of this property is: `SMALL`.

3. **fill** `optional`

  Type: `string`

  You can use this property to customize the color of the icon you're using. The default value for this property is `black`.

4. **className** `optional`

  Type: `string`

  If you need to add a specific css class to the `Icon` component, you can pass the `className`.

```tsx
<Icon iconName={IconName.CARET_RIGHT} fill="green" size={IconSize.X_LARGE} />
<Icon iconName={IconName.NOTIFICATIONS_OUTLINED} fill="blue" size={IconSize.LARGE} />
<Icon iconName={IconName.DRAG} fill="red" size={IconSize.MEDIUM} />
<Icon iconName={IconName.ERROR_OUTLINED} fill="black" size={IconSize.SMALL} />
<Icon iconName={IconName.GAP} fill="pink" size={IconSize.TINY} />
```

## Components

We have implemented some reusable components using the elements, defined in the `/components` directory. We will review each one to see how to use them.

### Accordion
The `Accordion` is a component to show contents animatedly that could be draggable or fixed.
This component is actually a wrapper for the [@szhsin/react-accordion](https://www.npmjs.com/package/@szhsin/react-accordion) library.

All the properties of the main component, is available for this component too (See the [documentation](https://szhsin.github.io/react-accordion/docs/getting-started)), but there are also some specific properties:

1. **items** `required`
The `items` property is an array that each item has a `header`, `content` and `buttons`.

2. **noDraggable** `optional`
By default the accordion is draggable and you can move the items with each other, but if you don't need this feature, you can pass the `true` value to this property.

3. **dragId** `optional`
Draggable components, need a unique dragId. So if you are using the draggable accordion, you should pass a `string` value to this property.

4. **onDragItemEnd** `optional`
If you need to control when the dragging process is ended, you can use this function. It gets a `result` parameter which is an object that includes the information of the source and destination of the dragging process.

Below you can see an example of using the `Accordion` component:

```tsx
<Accordion
  transitionTimeout={/* determine the speed of opening and closing the items */}
  noDraggable={/* true/false */}
  items={[
    {
      header: 'Please open me',
      content: 'lorem ipsum',
      buttons: [
        {
          text: 'Edit',
          onClick(params: IAccordionItemButtonClickParams): void {
            /* some functionalities */
          }
        },
        {
          text: 'Delete',
          variant: ButtonVariant.SECONDARY,
          color: ButtonColor.RED,
          onClick(params: IAccordionItemButtonClickParams): void {
            /* some functionalities */
          }
        }
      ]
    },
    {
      header: 'Please open me 2',
      content: (
        <>
          <p>this is body</p>
          <br />
          <Input placeholder="Placeholder" label="Sample Label" help="This is hint" />
          <br />
          <div style={{ display: 'flex', gap: '4px' }}>
            <Button>Submit</Button>
            <Button variant={ButtonVariant.SECONDARY}>Cancel</Button>
          </div>
        </>
      )
    }
  ]}
/>
```

### Alert

#### Single Alert
This is the wrapper component for the [Snackbar](https://developer.wordpress.org/block-editor/reference-guides/components/snackbar/) component of `@wordpress/components`.

All the properties of the main component is accessible for this component too, and there is only one more property:

**status** `optional`
The status property will show how the Alert component looks like. It's type is an enum with 4 different choices: `SUCCESS`, `ERROR`, `INFO`, and `WARNING`.

Here is an example of using `Alert` component:

```tsx
<Alert status={AlertStatus.SUCCESS}>
  Example Text
</Alert>
```

#### Alert List
Alert list is a wrapper to the [SnackbarList]() component of the `@wordpress/components` library.
It can handle multiple alerts in one component.
The component will be displayed as a fixed element in the HTML page.

All the properties are the same as the main component.