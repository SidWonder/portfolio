import React from 'react';

export default function ContactForm() {
    return (<section className='contact-form'>
        <h2 className='contact-form__header'>Write me a letter, give me a call</h2>
        <span className='contact-form__subheader'></span>
        <form className='contact-form__form' action="#">
            <input className='contact-form__input' name='name' type="text"/>
            <input className='contact-form__input' name='email' type="email"/>
            <textarea className='contact-form__textarea' name="message" id="" cols="30" rows="10"></textarea>
            <button className='contact-form__button' type='submit'>Отправить</button>
        </form>
        позвони мне позвони
    </section>)
}