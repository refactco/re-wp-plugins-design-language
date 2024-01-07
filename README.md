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
The `Input` component is a wrapper to `__experimentalInputControl` of `@wordpress/components` package. So in addition to properties of the main component, just a property is added, and another one has type change.

1. **type**
The type of `type` property is changed to `InputType` which is an `enum` with the following choices:

- TEXT
- DATE
- DATE_TIME_LOCAL
- COLOR
- EMAIL
- HIDDEN
- MONTH
- NUMBER
- PASSWORD

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
The `Checkbox` input is a wrapper component for `CheckboxControl` component of `@wordpress/components`, and all of properties of the main component is the same for our customized component.

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
The `Radio` input is also a wrapper component for `RadioControl` which is a component of `@wordpress/components`. So all of the properties of `Radio` is the same as `RadioControl`.

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