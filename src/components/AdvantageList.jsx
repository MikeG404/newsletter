import CheckIcon from "/check.png";

const advantages = {
    1: "Product discovery and building what matters",
    2: "Measuring to ensure updates are a success",
    3: "And much more!"
};

export default function AdvantageList() {
    return (
        <ul className="flex flex-col gap-2">
            {Object.entries(advantages).map((advantage) => {
                return (
                    <li key={advantage[0]} className="flex justify-start items-center gap-4">
                        <img src={CheckIcon} alt="Check icon" className="w-[21px] h-[21px] items-start" />
                        <p className="text-preset-2-regular">{advantage[1]}</p>
                    </li>
                );
            })}
        </ul>
    );
}
