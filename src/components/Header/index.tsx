import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";
import { Dialog } from "radix-ui";
import logoImg from "../../assets/logo.svg"
import { NewTransactionsModal } from "../NewTransactionsModal";

export function Header() {

    return (
        <HeaderContainer>
            <HeaderContent>
                <img src={logoImg} alt="" />
                
                <Dialog.Root>
                    <Dialog.Trigger asChild>
                        <NewTransactionButton>Nova transação</NewTransactionButton>
                    </Dialog.Trigger>

                    <NewTransactionsModal />
                </Dialog.Root>
            </HeaderContent>
        </HeaderContainer>
    )
}