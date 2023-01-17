interface HabitProps {
  completed: number;
}

const Habit = (props: HabitProps) => {
  return (
    <p className="bg-zinc-900 w-10">{props.completed}</p>
  )
}

export default Habit;