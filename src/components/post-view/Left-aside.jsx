export default function Leftaside() {
  return (
    <div className="flex flex-col mt-10 me-5 gap-5">
      <div>
        <img
          src="../love.svg"
          alt="heart-reactions icon"
          className="w-6 h-6 "
        />
        <p className="text-center">4</p>
      </div>
      <div>
        <img src="../comments-count.svg" alt="comments icon" />
        <p className="text-center">0</p>
      </div>
      <div>
        <img
          src="../save-No-Background-Icon.svg"
          alt="comments icon"
          className="w-6 h-6"
        />
        <p className="text-center">0</p>
      </div>
    </div>
  );
}
