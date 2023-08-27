import React from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
export class TodoInput extends React.Component {
    constructor() {
        super()
        this.state = {
            text: ""
        }
        this.handleChangeInput = this.handleChangeInput.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChangeInput(e) {
        const text = e.target.value;
    //    console.log(text)
        this.setState({ text })

    }

    handleSubmit() {
        if (this.state.text.trim() === "") {
            // Giriş alanı boşsa, bir uyarı mesajı göster
            toast.error('Luften bir deyer giriniz..!', {
                position: "top-right", // Tost bildiriminin pozisyonu
                autoClose: 2000, // Otomatik olarak kapanma süresi (2 saniye)
                hideProgressBar: false, // İlerleme çubuğunu gizle
                closeOnClick: true, // Tıklanınca kapat
                pauseOnHover: true, // Üzerine gelince duraklat
                draggable: false, // Sürükleyerek hareket ettirebilir
                progress: undefined,
                style: {
                    width: "auto", // Genişlik ayarı
                    maxWidth: "80%", // Maksimum genişlik
                },
            });

        } else if (this.state.text.length > 20) {
            toast.error('lutfen 20 simvoldan fazla girmeyeniz..', {
                position: "top-right", // Tost bildiriminin pozisyonu
                autoClose: 2000, // Otomatik olarak kapanma süresi (2 saniye)
                hideProgressBar: false, // İlerleme çubuğunu gizle
                closeOnClick: true, // Tıklanınca kapat
                pauseOnHover: true, // Üzerine gelince duraklat
                draggable: false, // Sürükleyerek hareket ettirebilir
                progress: undefined,
                style: {
                    width: "auto", // Genişlik ayarı
                    maxWidth: "80%", // Maksimum genişlik
                },
            });
        } else {
            this.props.addTodo(this.state.text)
            toast.success('Məlumat başarı ilə eklendi..', {
                position: "top-right", // Tost bildiriminin pozisyonu
                autoClose: 2000, // Otomatik olarak kapanma süresi (2 saniye)
                hideProgressBar: false, // İlerleme çubuğunu gizle
                closeOnClick: true, // Tıklanınca kapat
                pauseOnHover: true, // Üzerine gelince duraklat
                draggable: false, // Sürükleyerek hareket ettirebilir
                progress: undefined,
                style: {
                    width: "auto", // Genişlik ayarı
                    maxWidth: "80%", // Maksimum genişlik
                },
            });
         //   console.log("click me")
            this.setState({ text: "" })

        }
    }
    render() {
     //   console.log(this.state)
        // console.log(this.props.addTodo)
        return (
            <div className="d-flex justify-content-center  align-items-center gap-2 mb-4">
                <input type="email" className="form-control w-50" id="exampleFormControlInput1" placeholder="Your Todo" onChange={this.handleChangeInput} value={this.state.text} />
                <button type="button" class="btn btn-primary" onClick={this.handleSubmit}>Add</button>
            </div>

        )
    }
}