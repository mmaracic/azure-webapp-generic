import { Avatar, DropdownMenu } from "radix-ui";
import { InlineFlexStyle } from "./FlexImage";

function Login() {
    return (
        <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
                <button>
                    <Avatar.Root className={InlineFlexStyle}>
                        <Avatar.Image src="https://avatars.dicebear.com/api/avataaars/john.svg" height="50px" width="50px" />
                        <Avatar.Fallback>U</Avatar.Fallback>
                    </Avatar.Root>
                </button>
            </DropdownMenu.Trigger>

            <DropdownMenu.Portal>
                <DropdownMenu.Content>
                    <DropdownMenu.Item onClick={() => alert("Login clicked")}>
						Login
					</DropdownMenu.Item>
                </DropdownMenu.Content>
            </DropdownMenu.Portal>
        </DropdownMenu.Root>
    )
}

export default Login;