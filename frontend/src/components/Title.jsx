const Title = ({titulo}) => {
    return (
        <h1 className="text-3xl text-white font-bold text-center mb-8 relative after:absolute after:content-[''] after:w-full after:max-w-[150px] after:left-[43%] after:bg-white after:h-[2px] after:top-[120%]">{titulo}</h1>
    );
}

export default Title;