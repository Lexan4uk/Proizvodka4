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
                    <select className="header__cities-dropdown" defaultValue={1}>
                        <option className="header__cities-dropdown-option" value="value1">Option 1</option>
                        <option className="header__cities-dropdown-option" value="value2">Option 2</option>
                        <option className="header__cities-dropdown-option" value="value3">Option 3</option>
                    </select>

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
