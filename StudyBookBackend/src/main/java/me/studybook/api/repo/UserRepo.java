package me.studybook.api.repo;

import me.studybook.api.domain.User;

public interface UserRepo {
    Long findLastUserId() throws Exception;

    User findUserByProviderId(String provideId) throws Exception;

    void save(User user) throws Exception;
}
