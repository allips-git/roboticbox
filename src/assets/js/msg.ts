interface ContactParams {
    company : string;
    name    : string;
    rank    : string;
    tel     : string;
    email   : string;
    message : string;
}

/**
 * @description 문의하기기 시 유효성 검사
 */
export const contactMsg = (params: ContactParams): { msg: string; id: string, state: boolean } => {
    if(params['company'] === '')
    {
        return { msg : '회사명을 입력해주세요.', id : 'company', state : false };
    }

    if(params['name'] === '')
    {
        return { msg : '이름을 입력해주세요.', id : 'name', state : false };
    }

    if(params['rank'] === '')
    {
        return { msg : '직급을 입력해주세요.', id : 'rank', state : false };
    }

    if(params['tel'] === '')
    {
        return { msg : '전화번호를 입력해주세요.', id : 'tel', state : false };
    }

    if(params['email'] === '')
    {
        return { msg : '이메일을 입력해주세요.', id : 'email', state : false };
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const stat       = emailRegex.test(params['email']);

    if(!stat)
    {
        return { msg : '잘못된 이메일 형식입니다.', id : 'email', state : false };
    }

    if(params['message'] === '')
    {
        return { msg : '문의 내용을 입력해주세요.', id : 'message', state : false };
    }

    return { msg : '', id : '', state : true };
}