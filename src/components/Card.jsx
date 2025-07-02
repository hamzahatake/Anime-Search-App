export default function Card() {
  return (
    <div className="w-full bg-cardBackground rounded-xl shadow-lg overflow-hidden flex flex-col items-center hover:scale-105 transition-transform duration-300 m-2">
      <img
        src="/images/Card1.png"
        alt="Anime Cover"
        className="w-full h-48 object-cover rounded-t-xl"
      />
      <div className="p-4 w-full flex flex-col gap-2">
        <h3 className="text-lg font-semibold text-white font-inter truncate">
          Anime Title
        </h3>
        <p className="text-sm text-textSecondary font-inter line-clamp-2">
          Description
        </p>
      </div>
    </div>
  );
}
