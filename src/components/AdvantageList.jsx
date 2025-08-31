import CheckIcon from "/check.png";

const advantages = {
    1: "Product discovery and building what matters",
    2: "Measuring to ensure updates are a success",
    3: "And much more!"
};

export default function AdvantageList() {
    return (
        <ul>
            {Object.entries(advantages).map((advantage) => {
                return (
                    <li key={advantage[0]} className="flex items-center gap-4">
                        <img src={CheckIcon} alt="Check icon" />
                        <p>{advantage[1]}</p>
                    </li>
                );
            })}
        </ul>
    );
}
