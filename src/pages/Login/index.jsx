import Button from '../../components/Button'
import Input from '../../components/Input'
import Label from '../../components/Labels'
import './style.css'

export default function Login () {
    return (
        <div id="login_page">
            <div className="login_container">
                <div className="box_left">
                    <img src="wallpaper.jpg" alt="wallpaper"/>
                </div>

                <div className="box_right">
                    <div className="title">
                        <Label text="Olá, Seja bem vindo(a)" />
                    </div>
                    <div className="inputs_container">
                        <Input placeholder="Insira seu usuário" type="text"/>
                    </div>
                    <div className="inputs_container">
                        <Input placeholder="Insira sua senha" type="password"/>
                    </div>

                    <div className="inputs_container">
                        <Button background="#F9117D" color="white" text="Acessar"/>
                    </div>
                    <div className="inputs_container">
                        <Button background="#1B2563" color="white" text="Registrar"/>
                    </div>
                </div>
            </div>
        </div>
    )
}