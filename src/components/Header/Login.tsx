import { Avatar } from "radix-ui";
import { InlineFlexStyle } from "./FlexImage";

function Login() {
    return (
        <Avatar.Root className={InlineFlexStyle}>
            <Avatar.Image src="https://avatars.dicebear.com/api/avataaars/john.svg" height="50px" width="50px"/>
            <Avatar.Fallback>U</Avatar.Fallback>
        </Avatar.Root>
    )
}

export default Login;