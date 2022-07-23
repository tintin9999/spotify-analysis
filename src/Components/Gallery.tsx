type Props = {
  children: JSX.Element[];
}

const Gallery = ({ children }: Props) => {
  return (
    <div className="bg-slate-100 pb-4">
      <div className="mx-auto container grid gap-5 justify-items-center grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {children}
      </div>
    </div>)
}

export default Gallery