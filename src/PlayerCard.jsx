const PlayerCard = ({ playerName, turn }) => {
  return (
    <div
      className={`rounded-full border-4 bg-white p-4 px-6 text-black ${
        turn && "border-pink-600"
      }`}
    >
      {playerName}
    </div>
  );
};

export default PlayerCard;
