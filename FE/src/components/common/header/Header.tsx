import CreateBtn from "./CreateBtn";
import Logo from "./Logo";
import UserBtn from "./UserBtn";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 flex w-full items-center justify-between rounded-b-xl bg-background px-2 py-4 shadow-sm sm:px-32">
      <Logo />
      <section className="flex w-fit items-center gap-4 sm:gap-8">
        <UserBtn />
        <CreateBtn />
      </section>
    </header>
  );
};
export default Header;
