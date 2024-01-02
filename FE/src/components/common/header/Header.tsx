import UserBtn from "./UserBtn";
import Logo from "./Logo";
import CreateBtn from "./CreateBtn";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 flex w-full items-center justify-between rounded-b-xl bg-background px-32 py-4 shadow-sm">
      <Logo />
      <section className="flex w-fit items-center gap-8">
        <UserBtn />
        <CreateBtn />
      </section>
    </header>
  );
};
export default Header;
