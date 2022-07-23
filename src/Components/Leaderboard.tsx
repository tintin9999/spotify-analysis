type Props = {
  data: any[];
  title: string;
}

const Leaderboard = (props: Props) => {
  return (
    <div className='bg-slate-200 rounded-md px-4 flex flex-col justify-center lg:mx-0 mx-8'>
      <div className='bg-slate-300 text-center text-lg sm:text-base md:text-2xl lg:text-3xl xl:text-4xl justify-self-start mb-2 sm:mb-2 lg:mb-8 md:mb-6 px-4'>{props.title}</div>
      {props.data.map(
        (data, idx) => <span key={idx} className='text-center text-lg lg:text-2xl sm:text-md'>{`${data[0]} — ${data[1]} songs`}</span>
      )}
    </div>
  )
}

export default Leaderboard