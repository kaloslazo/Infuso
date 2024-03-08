interface ButtonComponentPropsInterface {
  btnIcon?: JSX.Element;
  btnText?: string;
  btnType?: "button" | "submit" | "reset" | undefined;
  btnOnClick?: any;
}

export const ButtonComponent = ({ btnIcon = <></>, btnText = '', btnType = 'submit', btnOnClick }: ButtonComponentPropsInterface) => {
  return (
    <button onClick={btnOnClick} type={btnType} className="inline-flex items-center gap-2 px-4 py-2 transition-colors ease-out delay-100 rounded-sm text-ctp-mantle bg-ctp-mauve hover:bg-ctp-mauve/90 focus:ring-2 focus:ring-ctp-mauve/20">
      <span className="text-sm font-medium">{ btnText }</span>
      {btnIcon}
    </button>
  )
}
