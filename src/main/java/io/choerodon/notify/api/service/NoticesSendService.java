package io.choerodon.notify.api.service;

import io.choerodon.notify.api.dto.EmailSendDTO;

public interface NoticesSendService {

    void postEmail(EmailSendDTO dto);

}
