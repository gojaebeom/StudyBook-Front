package me.studybook.api.repo.user;

import me.studybook.api.domain.User;

public interface UserRepo {
    Long findLastUserId() throws Exception;

    User findUserByProviderId(String provideId) throws Exception;

    User findUserById(Long userId) throws Exception;

    void save(User user) throws Exception;

    void remove(Long userId) throws Exception;
}
