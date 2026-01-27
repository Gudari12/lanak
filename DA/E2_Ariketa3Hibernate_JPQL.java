package Ariketak;

import java.util.List;

import Entities.*;
import jakarta.persistence.*;

public class JPQL {

    public static void main(String[] args) {
        
        EntityManagerFactory entityManagerFactory = Persistence.createEntityManagerFactory("PersistentziaUnitatea");

        EntityManager em = entityManagerFactory.createEntityManager();
        
        try {
            List<Student> students = em
                    .createQuery("SELECT s FROM Student s", Student.class)
                    .getResultList();
                
                for (int i = 0; i < students.size(); i++) {
                    Student s = students.get(i);
                    System.out.println("id: " + s.getId() + ", izena: " + s.getFirstName());
                }
        }catch(Exception e) {
            System.out.println("Errorea egon da 1.kontsulta egitean");
        }
        
        try {
            List<Student> students = em
                    .createQuery("SELECT s FROM Student s WHERE s.lastName = :abizena", Student.class)
                    .setParameter("abizena", "Perez")
                    .getResultList();
            for (int i = 0; i < students.size(); i++) {
                Student s = students.get(i);
                System.out.println("id: "+s.getId()+", izena: "+s.getFirstName()+", abizena:"+s.getLastName());
            }
            
        }catch(Exception e) {
            System.out.println("Errorea egon da 2.kontsulta egitean");
        }

        try {
            Long count = em.createQuery(
                    "SELECT COUNT(s) FROM Student s WHERE s.university.name = :uni", Long.class)
                    .setParameter("uni", "EHU")
                    .getSingleResult();
            System.out.println("EHU-ko ikasle kopurua: "+count);
            
        }catch(Exception e) {
            System.out.println("Errorea egon da 3.kontsulta egitean");
        }
        
    }

}