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

- **iconName** `required`

  Type: `IconName`

  You can find the possible choices for this enum in the `/src/elements/icon/icon-type.ts` path.

- **size** `optional`

  Type: `IconSize`

  The options you can use for this enum are: `TINY`, `SMALL`, `MEDIUM`, `LARGE`, and `X_LARGE`. The default value of this property is: `SMALL`.

- **fill** `optional`

  Type: `string`

  You can use this property to customize the color of the icon you're using. The default value for this property is `black`.

- **className** `optional`

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

- **items** `required`
The `items` property is an array that each item has a `header`, `content` and `buttons`.

- **noDraggable** `optional`
By default the accordion is draggable and you can move the items with each other, but if you don't need this feature, you can pass the `true` value to this property.

- **dragId** `optional`
Draggable components, need a unique dragId. So if you are using the draggable accordion, you should pass a `string` value to this property.

- **onDragItemEnd** `optional`
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
Alert list is a wrapper to the `SnackbarList` component of the `@wordpress/components` library.
It can handle multiple alerts in one component.
The component will be displayed as a fixed element in the HTML page.

All the properties are the same as the main component.

Here is an example of using `AlertList` component:

```tsx
<AlertList
  onRemove={() => {}}
  notices={[
    {
      id: '1',
      content: 'Hello guys',
      status: AlertStatus.SUCCESS,
      explicitDismiss: true
    },
    {
      id: '2',
      content: 'Hello guys 2',
      status: AlertStatus.ERROR,
      explicitDismiss: true
    },
    {
      id: '3',
      content: 'Alert with custom icon',
      status: AlertStatus.ERROR,
      // show a dismiss icon
      explicitDismiss: true,
      // with icon
      icon: <Icon iconName={IconName.DELETE} />
    },
    {
      id: '3',
      content: 'Alert without dismiss icon',
      status: AlertStatus.ERROR
    }
  ]}
/>
```

### Block
This component is a container component.
The component is divided to two sides, the left side is included an `icon` with a title, and the right side could be included with any component required.

`Block` component will get the following properties:

- **title** `required`
This is a `string` property that shows the title of the `Block` component.

- **iconName** `required`
The type of this property is `IconName` which is an enum. This property will use for showing the icon of the `Block` component.

Below, you can see an example of `Block` component:

```tsx
<Block iconName={IconName.GAP} title="This is title">
  <Range
    label="Adjust Gap"
    value={/* range value */}
    help="px"
    onChange={(value: number | undefined): void => {
      /* on change functionality */
    }}
  />
</Block>
```

### Container
The `Container` component is a versatile wrapper that can be used to encapsulate other components or content with specific styling constraints such as width and margin behavior. It leverages styled components for efficient and flexible styling. This document outlines the properties available for the `Container` component and provides an example of how to use it.

#### Properties

The component accepts the following properties:

- **type** `optional`
Defines the container's margin behavior. It accepts one of three values from the `ContainerType` enum:
  1. `FULL_WIDTH`: The container takes up the full width of its parent.
  2. `MARGIN_AUTO`: Automatically applies margins to center the container within its parent.
  3. `STATIC_MARGIN`: Uses predefined margin values specified in the container's styling. This is the default value if `type` is not specified.
- **width** `optional`
Specifies the width of the container. It accepts any valid CSS width value (e.g., `100px`, `50%`, `auto`). The default value is `unset`, allowing the container to adapt based on its content and the specified `type`.

- **children** `required`
The content to be rendered within the container. This can be any React nodes.

#### Example Usage

Below is an example of how to use the `Container` component within a React application. This example demonstrates how to create a centered container with a fixed width.

```tsx
import { Container, ContainerType } from './path/to/Container';

function App() {
  return (
    <Container type={ContainerType.MARGIN_AUTO} width="960px">
      <h1>Hello World</h1>
      <p>This is a simple example of using the Container component.</p>
    </Container>
  );
}
```

### FieldMap

`FieldMap` is a complex component used for rendering a dynamic list of items with the capability to add or remove rows. It utilizes the `FieldMapCell` for individual cells and provides a structured layout for item lists, including headers and customizable add/remove functionality.

#### Properties

- **headers** `required`
  - Description: An array of objects defining the headers of the field map. Each header object must include a `title` (string) and can optionally specify a `customWidth` (string) for the header cell.

- **children** `required`
  - Description: An array of `ReactNode[]`, representing the rows to be rendered within the field map. Each child corresponds to a row in the field map.

- **gap** `optional`
  - Description: Specifies the gap between rows and cells within the field map. Accepts any valid CSS size value (e.g., `20px`). Defaults to `20px` if not specified.

- **removeIcon** `optional`
  - Description: Defines the icon used for the remove button in each row. Can accept an `IconType` from the `@wordpress/components` or an `IconName` enum value. Defaults to `IconName.DELETE`.

- **addItemText** `optional`
  - Description: The text displayed on the button used to add new rows. Defaults to `'Add a new row'`.

- **onAddItemClick** `required`
  - Description: A function to be called when the add item button is clicked. It does not accept any parameters and does not return anything.

- **onRemoveItemClick** `required`
  - Description: A function to be called when the remove item button is clicked for a specific row. It accepts one parameter, `rowIndex` (number), indicating the index of the row to be removed.

#### Example Usage

```jsx
import React from 'react';
import { FieldMap, IFieldMapHeader } from './path/to/FieldMap';

const headers: IFieldMapHeader[] = [
  { title: 'Column 1', customWidth: '150px' },
  { title: 'Column 2' },
  // Add more headers as needed
];

function MyComponent() {
  const handleAdd = () => {
    // Logic to add a new row
  };

  const handleRemove = (index: number) => {
    // Logic to remove a row at a specific index
  };

  return (
    <FieldMap
      headers={headers}
      onAddItemClick={handleAdd}
      onRemoveItemClick={handleRemove}
    >
      {/* Row components or elements go here */}
    </FieldMap>
  );
}
```

This documentation outlines the structure and usage of the `FieldMapCell` and `FieldMap` components, including their properties and a practical example for implementing a dynamic field mapping interface.


### Section

The `Section` component encapsulates a section of content, complete with a customizable header and an optional body. It leverages the `SectionHeader` component for the header part, allowing for a consistent layout across different sections of an application.

#### Properties

- **headerProps** `required`
  - Description: An object containing properties to be passed to the `SectionHeader` component. This includes all properties supported by `SectionHeader` such as `title`, `description`, and `infoText`. It ensures that each section can have a customized header.

- **children** `optional`
  - Description: The content to be displayed within the body of the section. This can include any React nodes, allowing for flexible content rendering within each section.

#### Example Usage

```tsx
import React from 'react';
import { Section } from './path/to/Section';
import { ISectionHeaderProps } from './path/to/header/section-header-type';

const headerProps: ISectionHeaderProps = {
  title: "Section Title",
  description: "Description of this section",
  infoText: "Additional info about this section"
};

function MySection() {
  return (
    <Section headerProps={headerProps}>
      <p>This is the content of the section.</p>
    </Section>
  );
}
```

### SortableCards
These examples demonstrate how to implement the `Section` components, showcasing the ability to provide detailed headers with additional information via tooltips and to structure content within distinct sections.

The `SortableCards` component provides a flexible and interactive way to display a list of items that can be sorted through drag-and-drop. It integrates with `@wordpress/components` for dropdown menus and includes custom styling for list items.

#### Properties

- **items** `required`
  - Description: An array of `ISortableCardItem` objects, each representing an item in the list. Each object must include `id`, `title`, and `badge` properties.

- **selectedItemId** `optional`
  - Description: The `id` of the item that is currently selected. This is used to apply a different style to the selected item to distinguish it from others.

- **menuItems** `optional`
  - Description: Properties to pass to the `DropdownMenu` component, excluding the `icon` property. This allows for the addition of a dropdown menu to each sortable card with customizable options.

- **onSelectedItemChange** `optional`
  - Description: A callback function that is called when a new item is selected. It receives the `id` of the newly selected item as its parameter.

#### Example Usage


```tsx
import React from 'react';
import { SortableCards } from './path/to/SortableCards';
import { IconName } from './path/to/icon/icon-type';

const items = [
  { id: '1', title: 'Item 1', badge: 'Badge 1' },
  { id: '2', title: 'Item 2', badge: 'Badge 2' },
  // Add more items as needed
];

function MyComponent() {
  const handleSelectedItemChange = (id) => {
    console.log(`Selected item id: ${id}`);
  };

  return (
    <SortableCards
      items={items}
      onSelectedItemChange={handleSelectedItemChange}
      menuItems={{
        label: 'Options',
        controls: [
          { title: 'Action 1', onClick: () => console.log('Action 1 clicked') },
          { title: 'Action 2', onClick: () => console.log('Action 2 clicked') },
          // Add more actions as needed
        ],
      }}
    />
  );
}
```

### Tooltip
This component allows for the creation of a dynamic, sortable list with integrated dropdown menus for additional actions, enhancing the interactivity of list displays.

The `Tooltip` component is designed to display a tooltip in various placements around a target element. It supports light and dark modes for different visual presentations.

#### Properties

- **mode** `optional`
  - Description: Sets the theme of the tooltip. It accepts two values from the `TooltipMode` enum: `LIGHT` or `DARK`. The default mode is `LIGHT`, which applies a light-themed background with dark text.

- **id** `required`
  - Description: A unique identifier for the tooltip. This ID is used to link the tooltip with its target element using the `data-tooltip-id` attribute.

- **place** `required`
  - Description: Specifies the position of the tooltip relative to its target element. It accepts values from the `TooltipPlace` enum, including positions like `TOP`, `BOTTOM`, `RIGHT`, `LEFT`, and their variations (`TOP_START`, `TOP_END`, etc.).

- **content** `required`
  - Description: The text or content to be displayed within the tooltip. This can be a simple text string or more complex HTML content.

- **children** `required`
  - Description: The target element around which the tooltip will be displayed. The tooltip is activated when the user hovers over or focuses on this element.

#### Example Usage

```tsx
import React from 'react';
import { Tooltip, TooltipMode, TooltipPlace } from './path/to/Tooltip';

function MyComponent() {
  return (
    <Tooltip
      id="myTooltip"
      mode={TooltipMode.DARK}
      place={TooltipPlace.BOTTOM}
      content="This is a tooltip example."
    >
      <button>This button has a tooltip</button>
    </Tooltip>
  );
}
```

### Table

The `Table` component is a responsive table solution designed to display data in both desktop and mobile layouts. It supports draggable rows for reordering and can be customized with actions for each row.

## Properties

- **headers** `required`
  - Description: An array of strings representing the column headers of the table.

- **dataRows** `required`
  - Description: A two-dimensional array of `ReactNode` items, representing the data for each cell of the table by rows.

- **actions** `optional`
  - Description: An array of `ITableAction` objects, each representing an action that can be performed on the rows of the table. These actions are typically represented as buttons or icons at the end of each row.

- **noDraggable** `optional`
  - Description: A boolean that, when set to true, disables the draggable functionality for reordering rows. Defaults to false, allowing rows to be reordered.

- **onDragItemEnd** `optional`
  - Description: A callback function that is called when a drag-and-drop operation is completed. It receives the result of the operation, which includes the source and destination indices.

## Example Usage

```tsx
import React from 'react';
import { Table } from './path/to/Table';
import { ReactNode } from 'react';

function MyTableComponent() {
  const headers = ['Column 1', 'Column 2', 'Column 3'];
  const dataRows: ReactNode[][] = [
    [<div>Row 1, Cell 1</div>, 'Cell 2', 'Cell 3'],
    ['Row 2, Cell 1', <span>Cell 2</span>, 'Cell 3'],
    // Add more rows as needed
  ];

  const handleDragEnd = (result: any) => {
    // Handle the drag end event, such as updating the order of data
    console.log(result);
  };

  return (
    <Table
      headers={headers}
      dataRows={dataRows}
      onDragItemEnd={handleDragEnd}
    />
  );
}
```

This component provides a flexible and responsive table layout, adapting seamlessly from desktop to mobile views. It allows for interactive data presentation, with support for custom row actions and reordering capabilities.

### Header

The `Header` component is designed to serve as the top part of a UI, containing a logo and a navigation menu. The component is highly customizable, allowing for different types of logos (text, SVG, or image) and a dynamic menu based on the provided items.

## Properties

- **items** `required`
  - Description: An array of `IHeaderItemProps` objects, each representing an item in the navigation menu. These items are used to render the menu and handle item selection.

- **logoSource** `required`
  - Description: The source for the logo, which can be a text string, an SVG React component, or an image source URL, depending on the `logoType`.

- **logoType** `optional`
  - Description: Specifies the type of the logo to be rendered. It accepts values from the `HeaderLogoType` enum: `SVG`, `IMAGE`, or `TEXT`. Defaults to `TEXT`.

- **activeItemIndex** `optional`
  - Description: The index of the currently active (selected) item in the navigation menu. This is used to highlight the active item.

- **onSelectItem** `optional`
  - Description: A callback function that is called when a new item in the navigation menu is selected. Receives the index of the selected item as its parameter.

## Example Usage

```tsx
import React from 'react';
import { Header, HeaderLogoType } from './path/to/Header';
import { Icon } from './path/to/Icon';

function MyAppHeader() {
  const items = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    // Add more menu items as needed
  ];

  const handleSelectItem = (index) => {
    console.log('Selected item index:', index);
  };

  return (
    <Header
      items={items}
      logoSource={<Icon name="MyAppLogo" />}
      logoType={HeaderLogoType.SVG}
      onSelectItem={handleSelectItem}
    />
  );
}
```

This documentation outlines how to implement the Header component, offering flexibility in logo presentation and navigation menu configuration for a cohesive and functional user interface.