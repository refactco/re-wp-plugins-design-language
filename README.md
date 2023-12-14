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
The button element is a wrapper to the button component of `@wordpress/components` library. The styles in the new component is customized and also the type of some properties is changed to `enum` the possible mistakes in using `string`.

#### Properties
As we mentioned you can use all the defined properties for the `button` component of the `@wordpress/components` library and you can check them [here](https://developer.wordpress.org/block-editor/reference-guides/components/button/). So I just mention those ones which their type is changed:

1. variant:
The type of this property is `ButtonVariant` and these are the possible choices for this property: `PRIMARY`, `SECONDARY`, `TERITARY`, and `LINK`.

```tsx
<Button variant={ButtonVariant.PRIMARY} />
```

2. color:
The type of this property is `ButtonColor` and these are the possible choices for this property: `GREEN`, and `RED`.

```tsx
<Button color={ButtonColor.GREEN} />
```

3. size:
The type of this property is `ButtonSize` and these are the possible choices for this property: `LARGE`, `MEDIUM`, `SMALL`, `X_SMALL`, and `XX_SMALL`.

```tsx
<Button size={ButtonSize.MEDIUM} />
```

4. icon position:
The type of this property is `ButtonIconPosition` and these are the possible choices for this property: `START`, and `END`.

```tsx
<Button iconPosition={ButtonIconPosition.END} />
```