type ProjectProps = {
    reverseOrder?: boolean;
  };
export const Project: React.FC<ProjectProps> = ({ reverseOrder }) => {
  
      
  return (
    <div className="project">
      <div className={`project__customer ${reverseOrder ? '' : 'order-reverse'}`}>
        <img src="/src/assets/man1.png" alt="man1" />
        <div className="project__info">
          <div className="project__title">
            We complete every projects extra care as customer need
          </div>
          <div className="project__desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at
            dictum risus, non suscipit arcu. Quisque aliquam posuere tortor, sit
            amet convallis nuncoe scelerisque in. orem ipsum dolor sit amet,
            consectetur adipisicing elit. Labore eius molestiae facere, natus
            reprehenderit eaque eum, autem ipsam. Magfini, error. Tempora odit
            laborum iure inventore possimus laboriosam qui nam.
          </div>
          <a className=" btn project__btn" href="/">
            Read more
          </a>
        </div>
      </div>
      <div className={`project__customer ${reverseOrder ? 'order-reverse' : ''}`}>
        <img src="/src/assets/man2.png" alt="man2" />
        <div className="project__info">
          <div className="project__title">
            We complete every projects extra care as customer need
          </div>
          <div className="project__desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at
            dictum risus, non suscipit arcu. Quisque aliquam posuere tortor, sit
            amet convallis nuncoe scelerisque in. orem ipsum dolor sit amet,
            consectetur adipisicing elit. Labore eius molestiae facere, natus
            reprehenderit eaque eum, autem ipsam. Magfini, error. Tempora odit
            laborum iure inventore possimus laboriosam qui nam.
          </div>
          <a className=" btn project__btn" href="/">
            Read more
          </a>
        </div>
      </div>
    </div>
  );
};
