export interface IBaseProps extends React.ComponentPropsWithoutRef<'div'> {}

export default function Base({}: IBaseProps): JSX.Element {
  return (
    <>
      <div className="text-blue-300 min-h-screen w-screen">
        Base
        <div>
          <i className="lucide icon-home cursor-pointer" />
        </div>
      </div>
    </>
  )
}
