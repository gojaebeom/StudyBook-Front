package me.studybook.api.repo.user;

import lombok.AllArgsConstructor;
import me.studybook.api.domain.User;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import java.net.BindException;
import java.util.List;

@Repository
@AllArgsConstructor
public class UserRepoImpl implements UserRepo {

    private EntityManager entityManager;

    @Override
    public Long findLastUserId() throws Exception {
        List<User> users = entityManager.createQuery("select u from User u order by u.id desc").getResultList();
        if(users.isEmpty()){
            return 0l;
        }
        return users.get(0).getId();
    }

    @Override
    public User findUserByProviderId(String providerId) throws Exception {
        List<User> users = entityManager.createQuery(
              "select u from User u "+
                " where u.username=:username")
                .setParameter("username", providerId)
                .getResultList();
        if(users.isEmpty()){
            return null;
        }
        return users.get(0);
    }

    @Override
    public User findUserById(Long userId) throws Exception {
        return entityManager.find(User.class, userId);
    }

    @Override
    public void save(User user) throws Exception {
        entityManager.persist(user);
    }

    @Override
    public void remove(Long userId) throws Exception {
        User user = entityManager.find(User.class, userId);
        if (user == null) {
            throw new BindException("회원이 존재하지 않습니다.");
        }
        entityManager.remove(user);
    }
}
