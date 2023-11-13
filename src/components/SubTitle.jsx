import classNames from 'classnames';

const SubTitle = ({ subtitle, className }) => {
  const baseClasses = "font-bold font-sans pl-2 pb-2 pt-4 text-center lg:text-2xl text-xl";
  const combinedClasses = classNames(baseClasses, className);


  return (
    <>
    <h2 className={combinedClasses}>{subtitle}</h2>
    </>
  )
}

export default SubTitle;