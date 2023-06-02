declare module '*.scss' {
    interface IClassNames {
        [className: string]: string
    }
    const classNames: IClassNames;
    export = classNames;
}

declare module "*.png"
declare module "*.jpg"
declare module "*.jpeg"

declare module "*.svg" {
    const content: any;
    export default content;
}