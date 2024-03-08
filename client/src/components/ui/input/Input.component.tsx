interface InputComponentPropsInterface {
  inputIcon?: JSX.Element;
  inputPlaceholder?: string;
  inputLabel?: string;
  inputType?: string;
  inputFor?: string;
  completeInput?: boolean;
  inputValue?: string;
  onChange?: any;
}

export const InputComponent = ({ inputIcon = <></>, inputPlaceholder = '', inputLabel = '', inputType = 'text', inputFor = '', completeInput = false, inputValue, onChange }: InputComponentPropsInterface) => {
  return (
    <div className="relative flex flex-col w-full h-full gap-2 items-left">
      <label htmlFor={inputFor} className={`${completeInput ? '' : 'sr-only'} font-medium`}>{inputLabel}</label>

      <input
        value={inputValue}
        onChange={onChange}
        type={inputType}
        id={inputFor}
        placeholder={inputPlaceholder}
        className="w-full h-full px-4 py-1.5 rounded-sm shadow-sm sm:text-sm bg-ctp-mantle border border-ctp-surface0 placeholder-ctp-overlay0 !outline-none ring-1 ring-transparent focus:ring-ctp-mauve"
      />

      <span className={`${completeInput ? 'inset-y-12' : 'inset-y-0'} absolute grid w-10 text-ctp-overlay0 pointer-events-none end-0 place-content-center`}>
        {inputIcon}
      </span>
    </div>
  )
}
