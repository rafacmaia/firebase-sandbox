type Props = {
  onLogOut: () => void;
};

export default function LoggedInView({ onLogOut }: Props) {
  return (
    <>
      <div className="relative aspect-[4/3] w-96 overflow-hidden rounded-lg border-5 border-black">
        <iframe
          src="https://giphy.com/embed/VcizxCUIgaKpa"
          className="absolute top-0 left-0 size-full brightness-125"
          title="Giphy embed"
        ></iframe>
      </div>

      <button
        className="relative h-15 w-84 cursor-pointer rounded-md border-3 border-black bg-yellow-300 p-3 text-center text-lg font-semibold shadow-[0_3px_0_0_rgba(0,0,0,1)] hover:top-[3px] hover:shadow-none active:top-[3px] active:shadow-none"
        onClick={onLogOut}
      >
        Logout
      </button>
    </>
  );
}
