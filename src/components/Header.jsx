import '@styles/Header.scss';
import getSvg from '@images/svg'


function Header() {
    const {
        arrow_down,
        search
      } = getSvg()
    return (
        <header className="header">
            <div className="header__holder block-normalizer f-row">
                <div className="header__cities-holder f-row">
                    <a className="header__cities-choose" href="/search/city">Выбрать город</a>
                </div>
                <div className="header__actions-holder f-row gap-16">
                    <a href='#' className="button-s button-s_slice-right">Ninja - рубли 0</a>
                    <button className="simple-button">{search()}</button>
                </div>
            </div>

        </header>
    );
}

export default Header;
