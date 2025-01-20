/**
 * @description 문의하기 관련 pinia
 */
import { defineStore } from 'pinia';
import emailjs from 'emailjs-com';

interface formData {
    company : string;
    name    : string;
    rank    : string;
    tel     : string;
    email   : string;
    message : string;
}

const getFormData = (): formData => {
    return {
        company : '',
        name    : '',
        rank    : '',
        tel     : '',
        email   : '',
        message : ''
    }
}

interface State {
    serviceId   : string;
    templateId  : string;
    checked     : boolean;
    formData    : formData;
    msg         : formData;
}

export const useContactStore = defineStore('contact', {
    state: (): State => ({
        state       : false,
        serviceId   : 'service_1k4x1s6',
        templateId  : 'template_gv2lgsd',
        checked     : false,
        formData    : getFormData(),
        msg         : getFormData()
    }),
    actions: {
        async sendEmail()
        {
            this.state = true;
            
            await emailjs.send(this.serviceId, this.templateId, this.formData, 'bWa0bfdRj9vzDYOzk').then(() => {
                alert('문의하기가 완료되었습니다.');
                this.getReset();
            }).catch((e) => {
                console.log(e);
                alert('문의하기에 실패하였습니다. 지속될 경우 관리자에게 문의하세요.');
            })

            this.state = false;
        },
        getMsgSet(msg: string, name: string)
        {
            this.msg        = getFormData();
            this.msg[name]  = msg;
        },
        getReset()
        {
            this.checked    = false;
            this.formData   = getFormData();
            this.msg        = getFormData();
        }
    }
});