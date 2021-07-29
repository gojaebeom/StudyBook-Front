package me.studybook.api.repo;

import lombok.AllArgsConstructor;
import me.studybook.api.domain.User;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import java.util.List;

@Repository
@AllArgsConstructor
public class H2UserRepo implements UserRepo {

    private EntityManager entityManager;

    @Override
    public Long findLastUserId() throws Exception {
        List<User> users = entityManager.createQuery("select u from User u order by  u.id").getResultList();
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
    public void save(User user) throws Exception {
        entityManager.persist(user);
    }
}
