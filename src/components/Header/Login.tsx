import { Avatar, DropdownMenu } from "radix-ui";
import { InlineFlexStyle } from "./FlexImage";
import { useMsal } from "@azure/msal-react";

function Login() {
    const { instance, accounts, inProgress } = useMsal();
    
    return (
        <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
                <button>
                    <Avatar.Root className={InlineFlexStyle}>
                        <Avatar.Image src="https://avatars.dicebear.com/api/avataaars/john.svg" height="50px" width="50px" />
                        <Avatar.Fallback>U</Avatar.Fallback>
                    </Avatar.Root>
                    {accounts.length > 0 && accounts[0].name}
                </button>
            </DropdownMenu.Trigger>

            <DropdownMenu.Portal>
                <DropdownMenu.Content>
                <DropdownMenu.Item onClick={() => instance.loginPopup()}>
						Login
					</DropdownMenu.Item>
                    <DropdownMenu.Item onClick={() => instance.logoutPopup()}>
						Logout
					</DropdownMenu.Item>
                </DropdownMenu.Content>
            </DropdownMenu.Portal>
        </DropdownMenu.Root>
    )
}

export default Login;