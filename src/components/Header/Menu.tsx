import { NavigationMenu } from "radix-ui";
import { css } from '../../../styled-system/css';
import { styled } from '../../../styled-system/jsx';
import { InlineFlexStyle } from './FlexImage';

interface MenuItemProps {
    itemText: string;
    itemHref: string;
}

//React component that uses prebuild style (can be outside defined constant)
const StyledMenuItem = ({ itemText, itemHref }: MenuItemProps) => (
    <NavigationMenu.Item className={css({margin: "10px"})}>
        <NavigationMenu.Link href={itemHref}>{itemText}</NavigationMenu.Link>
    </NavigationMenu.Item>
)

//Styled object that can directly embed css properties
const StyledMenuList = styled(NavigationMenu.List)

function Menu() {
    return (
        <NavigationMenu.Root className={css({display: "inline-flex"})}>
            <StyledMenuList listStyle="none" display="inline-flex">
                <StyledMenuItem itemText="Home" itemHref="/" />
                <StyledMenuItem itemText="About" itemHref="/about" />
            </StyledMenuList>
        </NavigationMenu.Root>
    );
}

export default Menu;